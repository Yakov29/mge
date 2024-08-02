const baseURL = "https://669a78899ba098ed61ffc5a3.mockapi.io/accounts";

export const addProfile = async (profile) => {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
};

export const getProfiles = async () => {
  try {
    const response = await fetch(baseURL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch profiles: ${error.message}`);
  }
};
