import { useEffect, useState } from "react";
import styles from './Resultado.module.css';
import imagem from '../../assets/imcBar.jpg';

const Resultado = ({ imcCalculado, parentCallbackEstilo }) => {
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState("");
    const [descricao, setDescricao] = useState("");
    const [indiceEstilo, setIndiceEstilo] = useState(7);
    const estilo = [styles.default, styles.m_abaixo, styles.abaixo, styles.normal, styles.sobrepeso, styles.obesidadeI, styles.obesidadeII, styles.obesidadeIII, styles.texto_default, styles.texto_m_abaixo, styles.texto_abaixo, styles.texto_normal, styles.texto_sobrepeso, styles.texto_obesidadeI, styles.texto_obesidadeII, styles.texto_obesidadeIII]

    useEffect(() => {
        setImc(imcCalculado);
        calculaClassificacao(imcCalculado);
    }, [imcCalculado]
    )

    function calculaClassificacao(valor) {
        if (valor > -1 && valor <= 16.9) {
            setClassificacao("Muito abaixo do peso");
            setDescricao("Nesse ponto, a chance de já estarmos diante de outras doenças associadas é mais elevada. É fundamental buscar orientação médica.");
            parentCallbackEstilo(estilo[1]);
            setIndiceEstilo(9);
        } else if (valor > 16.9 && valor <= 18.4) {
            setClassificacao("Abaixo do peso");
            setDescricao("É recomendado procurar um médico para avaliação criteriosa do resultado. Pode indicar um estado de consumo do organismo, com poucas reservas e riscos associados.");
            parentCallbackEstilo(estilo[2]);
            setIndiceEstilo(10);
        }else if (valor > 18.4 && valor <= 24.9) {
            setClassificacao("Normal");
            setDescricao("Tudo indica que está tudo bem, mas é importante avaliar outros parâmetros da composição corporal, para compreender se estão dentro do recomendado. Algumas pessoas apresentam IMC dentro da normalidade, mas têm circunferência abdominal maior que a recomendada e/ou quantidade de massa gorda acima do ideal.");
            parentCallbackEstilo(estilo[3]);
            setIndiceEstilo(11);
        }else if (valor > 24.9 && valor <= 29.9) {
            setClassificacao("Sobrepeso");
            setDescricao("O sobrepeso está associado ao risco de doenças como diabetes e hipertensão. Então, atenção! Consulte um médico e reveja hábitos para reverter o quadro. Também é importante avaliar outros parâmetros, como a circunferência abdominal.");
            parentCallbackEstilo(estilo[4]);
            setIndiceEstilo(12);
        }else if (valor > 29.9 && valor <= 34.9) {
            setClassificacao("Obesidade Grau I");
            setDescricao("É importante buscar orientação médica e nutricional para entender melhor o seu caso, mesmo que os exames (colesterol e glicemia, por exemplo) estejam normais.");
            parentCallbackEstilo(estilo[5]);
            setIndiceEstilo(13);
        }else if (valor > 34.9 && valor <= 39.9) {
            setClassificacao("Obesidade Grau II");
            setDescricao("Indica um quadro de obesidade mais evoluído em relação à classificação anterior e, mesmo com exames laboratoriais dentro da normalidade, não se deve atrasar a busca por orientação médica e nutricional.");
            parentCallbackEstilo(estilo[6]);
            setIndiceEstilo(14);
        }else if (valor > 39.9){
            setClassificacao("Obesidade Grau III");
            setDescricao("Nesse ponto, a chance de já estarmos diante de outras doenças associadas é mais elevada. É fundamental buscar orientação médica.");
            parentCallbackEstilo(estilo[7]);
            setIndiceEstilo(15);
        }else {
                setClassificacao("Calculo de índice de massa corporal");
                setDescricao("");
                setImc("");
                parentCallbackEstilo(estilo[0]);
                setIndiceEstilo(8);
        }
    }

    return (
        <div className="container">
            <div className={styles.resultado}>
                <div className={["titulo", estilo[indiceEstilo]].join(' ')}>
                    <h1>{classificacao}</h1>
                </div>
                <div className="nota">
                    <h2>{imc}</h2>
                </div>
                <div className="tabela">
                    <img src={imagem} alt="Tabela IMC" />
                </div>
                <p>{descricao} </p>
            </div>
        </div>
    )
}

export default Resultado;