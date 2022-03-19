const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.DATO_CMS_TOKEN;

export default async function getContent(query, { variables } = {}) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    return json.data;
  } catch (err) {
    throw new Error("Failed to fetch API");
  }
}
