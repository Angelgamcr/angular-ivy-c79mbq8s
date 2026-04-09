export interface FlightData {
  // Flight info
  id: string;
  type: 'entering' | 'leaving';
  destination: string;
  people: number;
  model: string;
  updateTime: number; // in seconds
}
