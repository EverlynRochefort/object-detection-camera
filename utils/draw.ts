import { DetectedObject } from '@tensorflow-models/coco-ssd';

export function drawOnCanvas(
    mirrored: boolean,
    predictions: DetectedObject[],
    ctx: CanvasRenderingContext2D | null | undefined
) {
    predictions.forEach((detectedObject: DetectedObject) => {
        const { class: name, bbox, score } = detectedObject;
        const [x, y, width, height] = bbox

        if (ctx) {
            ctx.beginPath();

            // Styling
            ctx.strokeStyle = name === 'person' ? '#FF0F0F' : '#00B612';

            // Mirroring
            const rectX = mirrored ? ctx.canvas.width - x - width : x;
            const rectY = y;
            const rectWidth = width;  

            ctx.strokeRect(rectX, rectY, rectWidth, height);

            // Draw Stroke
            ctx.stroke();

            // Text Styling
            ctx.font = "24px Poppins";

            // Text Positioning
            const textWidth = ctx.measureText(name).width;
            const textX = rectX + (rectWidth - textWidth) / 2;
            const textY = y - 5;

            ctx.fillText(name, textX, textY);
        }
    });
}