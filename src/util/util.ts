import apiService from "../services/api";

const formatDate = (value) => {
  const numbers = value.replace(/\D/g, "").substring(0, 8);
  if (numbers.length > 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(
      4,
      8
    )}`;
  } else if (numbers.length > 2) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
  }
  return numbers;
};

const findList = async (dateListSend) => {
  const formattedDateList = await formatDate(dateListSend);
  const userId = localStorage.getItem("mylist@idUser");

  try {
    const response = await apiService.get("/shoppinglist/find", {
      params: { dateList: formattedDateList, userId: userId },
    });
    
    if (response.data && response.data.length > 0) {
      return response.data[0].id;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao consultar a lista: ", error);
    return null;
  }
};

const findAllList = async () => {
  const userId = localStorage.getItem("mylist@idUser");
  try {
    const response = await apiService.get(`shoppinglist/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao consultar as listas cadastradas: ", error);
    return null;
  }
};

const formatDateForServer = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const checkIfDateHasList = async (date) => {
  const formattedDate = formatDateForServer(date);

  try {
    const lists = await findAllList();
    const listExists = lists.some(list => list.dateList === formattedDate);
    return listExists;
  } catch (error) {
    console.error("Erro ao verificar se há lista para a data: ", error);
    return false;
  }
};

export default {
  formatDate,
  findList,
  findAllList,
  formatDateForServer,
  checkIfDateHasList, 
};
