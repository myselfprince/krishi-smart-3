export const getPosts = async () => {
    try {
      const response = await fetch("/api/community");
      if (!response.ok) {
        const errorText = await response.text();
        console.log("Response text:", errorText);
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in getPosts:", error);
      throw error;
    }
  };
  
  export const createPost = async (postData) => {
    try {
      const response = await fetch("/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in createPost:", error);
      throw error;
    }
  };
  
  export const votePost = async (postId, voteType) => {
    try {
      const response = await fetch(`/api/community/${postId}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ voteType }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.log("Response text:", errorText);
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }
  
      const data = await response.json();
      return data.votes;
    } catch (error) {
      console.error("Error in votePost:", error);
      throw error;
    }
  };