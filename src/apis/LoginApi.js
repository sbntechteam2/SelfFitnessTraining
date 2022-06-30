import ky from "ky";
import { useToast } from "vue-toastification";

const api = ky.create({
  prefixUrl: "https://sbnttinfobot.xyz/sftapi",
});
const toast = useToast();

const useLoginApi = (username, password) => {
  const loginUser = async () => {
    let data = null;
    try {
      const res = await api.post("login", {
        json: {
          username: username.value,
          password: password.value,
        },
      });
      data = await res.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Login Success!");
      }
    } catch (error) {
      const errMsg = await error.response.json();
      toast.error(errMsg.message);
    }
    return data;
  };
  return { loginUser };
};

export { useLoginApi };