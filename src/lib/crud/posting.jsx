import Router from "next/router";

export const posting = async (endpoint, data, dispatch) => {
  await fetch("/api" + endpoint, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  }).then(async (res) => {
    const results = await res.json();
    const { status, message } = results;
    dispatch({ type: "ADD_ALERT", status, message });
    await Router.push("/");
  });
};
