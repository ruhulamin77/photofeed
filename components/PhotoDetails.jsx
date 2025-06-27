import { getDictionary } from '@/app/[lang]/dictionaries';
import Image from 'next/image';
import React from 'react';

export default async function PhotoDetails({ id, lang }) {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);

  const photo = await response.json();

  const dictionaries = await getDictionary(lang);

  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 my-4 lg:my-8 container">
      {/* <!-- main photo --> */}
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          className="w-full max-h-[70vh] object-contain mx-auto"
          src={photo.url}
          alt=""
          width={800}
          height={600}
        />
      </div>
      {/* <!-- main photo ends --> */}

      {/* <!-- details card --> */}
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">
          {photo.title || 'The Beautiful Nature'}
        </h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {photo.tags.map((tag) => `#${tag} `)}
        </div>
        {/* <!-- info rows --> */}
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          {/* <!-- item start --> */}
          <div className="flex justify-between">
            <span>{dictionaries.views}</span>
            <span className="font-bold">{photo.views}</span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item start --> */}
          <div className="flex justify-between">
            <span>{dictionaries.share}</span>
            <span className="font-bold">{photo.share}</span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item start --> */}
          <div className="flex justify-between">
            <span>{dictionaries.uploadedOn}</span>
            <span className="font-bold">{photo.uploaded}</span>
          </div>
          {/* <!-- item ends --> */}
        </div>
        {/* <!-- info rows ends --> */}

        {/* <!-- author info --> */}
        <div className="mt-6">
          {/* <!-- author header --> */}
          <div className="flex justify-between items-center mb-3">
            {/* <!--  --> */}
            <div className="flex items-center gap-3">
              <Image
                className="size-12 lg:size-14 rounded-full border"
                width={50}
                height={50}
                src={photo.author.avatar || '/avatar.png'}
                alt="avatar"
              />
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">{photo.author.name}</h6>
                <p className="text-black/60 text-xs lg:text-sm">
                  {photo.author.followers} {dictionaries.followers}
                </p>
              </div>
            </div>
            {/* <!-- action --> */}
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/follow.svg"
                height={20}
                width={20}
                alt="follow"
                className="w-5 h-5"
              />
              {dictionaries.follow}
            </button>
          </div>
          {/* <!-- author bio --> */}
          <p className="text-xs lg:text-sm text-black/60">{photo.author.bio}</p>
        </div>
        {/* <!-- author info ends --> */}
        {/* <!-- actions --> */}
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/heart.svg"
                height={20}
                width={20}
                alt="heart"
                className="w-5 h-5"
              />
              {photo.likes}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/save.svg"
                height={20}
                width={20}
                alt="save"
                className="w-5 h-5"
              />
              {dictionaries.save}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/share.svg"
                height={20}
                width={20}
                alt="share"
                className="w-5 h-5"
              />
              {dictionaries.share}
            </button>
          </div>
        </div>
      </div>
      {/* <!-- details card ends --> */}
    </div>
  );
}
