import { getPhotoById } from '@/lib/get-photos';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const photoId = params?.id;
  const photo = await getPhotoById(photoId);
  return NextResponse.json(photo);
}
