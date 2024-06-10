import { Schema, model } from 'mongoose';

const PositionSchema = new Schema({
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now, expires: '24h' },
});

export const Position = model('Position', PositionSchema);
