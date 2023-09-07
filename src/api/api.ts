const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

export interface ShortenApiResponse {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
}

export const fetchLink = (inputLink: string) => {
  return new Promise<ShortenApiResponse>(async (resolve, reject) => {
    try {
      const response = await fetch(apiUrl.concat(inputLink));
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else {
        console.error(
          "API request failed:",
          response.status,
          response.statusText
        );
        reject(
          new Error(
            "API request failed" + response.status + response.statusText
          )
        );
      }
    } catch (error) {
      console.error("API request error:", error);
      reject(new Error("API request error" + error));
    }
  });
};
