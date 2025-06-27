import { getAllPhotos } from '@/lib/get-photos';
import { NextResponse } from 'next/server';

export async function GET() {
  const photos = await getAllPhotos();

  return NextResponse.json(photos);
}
