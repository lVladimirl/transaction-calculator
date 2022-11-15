import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Api } from "../../api/index";
import "./index.css";

export const TransactionForm = ({setPrevisionDates}) => {
  const history = useHistory();

  const schema = yup.object().shape({
    amount: yup
      .number()
      .required()
      .typeError("you must specify a number")
      .min(1000, "Must be equal or higher than 1000"),
    installments: yup
      .number()
      .required()
      .typeError("you must specify a number")
      .min(1, "Must be equal or higher than 1"),
    mdr: yup
      .number()
      .required("Required field!")
      .typeError("you must specify a number")
      .min(1, "Must be equal or higher than 1"),
    days: yup.string().nullable(true),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    if (data.days) {
      const treatedData = [];
      data.days.split(",").forEach((element) => {
        treatedData.push(parseInt(element));
      });
      const dataPackage = {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
        days: treatedData,
      };
      Api.post("", dataPackage).then((resp) => {
        setPrevisionDates(resp.data)
      });
    } else {
      const dataPackage = {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
      };
      Api.post("", dataPackage).then((resp) => {
        setPrevisionDates(resp.data)
      });
    }
  };
  return (
    <form className="transaction-info-input" onSubmit={handleSubmit(onSubmit)}>
      <h2>Simule sua Antecipação</h2>

      <label>Valor da venda</label>
      {errors && <span>{errors.amount?.message}</span>}
      <input
        type={"number"}
        placeholder="amount"
        {...register("amount")}
      ></input>
      
      <label>Quantas parcelas</label>
      {errors && <span>{errors.installments?.message}</span>}
      <input
        type={"number"}
        placeholder="installments"
        {...register("installments")}
      ></input>

      <label>Percentual do MDR</label>
      {errors && <span>{errors.mdr?.message}</span>}
      <input type={"number"} placeholder="mdr" {...register("mdr")}></input>

      <label>Dias de pagamento</label>
      {errors && <span>{errors.days?.message}</span>}
      <input type={"text"} placeholder="days" {...register("days")}></input>
      <small>Ex: 15,30,45...</small>

      <button type="submit">calcular</button>
    </form>
  );
};
