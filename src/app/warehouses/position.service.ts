import { Position } from './position.model';

export class PositionService {
  async createPosition(lat: number, long: number) {
    const position = new Position({ lat, long });
    return await position.save();
  }

  async getAllPositions() {
    return await Position.find();
  }

  async deleteOldPositions() {
    const now = new Date();
    const cutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    await Position.deleteMany({ timestamp: { $lt: cutoff } });
  }
}
