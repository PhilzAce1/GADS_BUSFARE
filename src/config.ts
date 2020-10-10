declare var process: {
  env: {
    JWT_SECRET: string;
    PORT: number;
  };
};
export const JWT_SECRET = process.env.JWT_SECRET;

export const PORT = process.env.PORT;
