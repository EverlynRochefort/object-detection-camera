![media_recorder](https://github.com/EverlynRochefort/object-detection-camera/assets/69831958/3afc7130-2498-401d-8830-dac6f2d67a16)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Object Detection (coco-ssd)

Object detection model that aims to localize and identify multiple objects in a single image.
This model is a TensorFlow.js port of the COCO-SSD model. For more information about Tensorflow object detection API, check out this readme in [tensorflow/object_detection](https://github.com/tensorflow/models/blob/master/research/object_detection/README.md).

This model detects objects defined in the COCO dataset, which is a large-scale object detection, segmentation, and captioning dataset. You can find more information [here](http://cocodataset.org/#home). The model is capable of detecting [80 classes of objects](https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts). (SSD stands for Single Shot MultiBox Detection).

This TensorFlow.js model does not require you to know about machine learning. It can take input as any browser-based image elements (<img>, <video>, <canvas> elements, for example) and returns an array of bounding boxes with class name and confidence level.
