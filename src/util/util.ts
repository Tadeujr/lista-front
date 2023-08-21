import apiService from "../services/api";

// Função para formatar a data com barras no formato dd/mm/aaaa
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
      // Se a lista for encontrada, utilizamos o id da primeira lista encontrada
      return response.data[0].id;
    } else {
      // Caso não encontre a lista, você pode tratar aqui de alguma forma
      return null;
    }
  } catch (error) {
    console.error("Erro ao consultar a lista: ", error);
    return null;
  }
};

export default { formatDate, findList};
