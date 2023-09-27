import {InfoService} from "bff"

export async function handler(event) {
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: InfoService.getInstance().getVersion(),
        input: event,
      },
      null,
      2
    ),
  };
};
