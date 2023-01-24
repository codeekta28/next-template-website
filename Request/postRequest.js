export const postRequest = async (api,data) => {
    try {
      // Send the POST request to the API
      const res = await fetch(`${api}`, {
        method: 'POST',
        body:data,
        // In this type of content type header is not required if you will put header you will get error
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // }
     
      });
      const dataJson=await res.json();
      // Check the status code of the response
  
     console.log(dataJson);
    
      return dataJson;

    } catch (error) {
      console.error(error);
    }
  };