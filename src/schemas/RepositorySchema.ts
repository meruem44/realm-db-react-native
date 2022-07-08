export const RepositorySchema = {
  name: "Repository",
  properties: {
    id: { type: "int", indexed: true },
    name: "string",
    fullName: "string",
    description: "string",
    stars: "int",
    forks: "int",
  },
};

export type RepositorySchemaType = {
  id: number;
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
};
