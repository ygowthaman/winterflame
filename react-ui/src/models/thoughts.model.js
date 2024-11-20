export class Thought {
  createdAt;
  id;
  thought;
  user;

  constructor(data) {
    this.createdAt = new Date(data.created_time).toLocaleString();
    this.user = data.user;
    this.id = data.id;
    this.thought = data.thought;
  }
}