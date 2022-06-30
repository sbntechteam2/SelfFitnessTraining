
import ky from "ky";
import { useToast } from "vue-toastification";

const toast = useToast();

const useGetAllLogsApi = () => {
  const api = ky.create({
    prefixUrl: "https://sbnttinfobot.xyz/sftapi",
    headers: {
      authorization: "Bearer" + localStorage.getItem("token"),
    },
  });
  const getAllLogs = async () => {
      let data = null;
      try {
          const res = await api.get("submission");
          data = await res.json();
      } catch (error) {
          const errMsg = await error.response.json();
          toast.error(errMsg.message);
      }
      return data;
    };
    return { getAllLogs };
};

export { useGetAllLogsApi };