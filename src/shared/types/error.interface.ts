export interface RejectedDataType {
  cod: string;
  message: string;
}

export interface ErrorType {
  readonly message: string;
  readonly response: {
    readonly status?: string;
  };
}
