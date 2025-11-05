// Storage interface for the tutoring service website
// This application uses static content, so no database storage is needed

export interface IStorage {
  // Add storage methods here if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize any storage if needed
  }
}

export const storage = new MemStorage();
