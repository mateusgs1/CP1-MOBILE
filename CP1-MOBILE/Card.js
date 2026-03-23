import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function CampoResultado({ chave, valor }) {
  return (
    <View style={styles.campoResultado}>
      <Text style={styles.chaveResultado}>{chave}</Text>
      <Text style={styles.valorResultado}>{valor}</Text>
    </View>
  );
}

function CardResultado({ dados }) {
  return (
    <View style={styles.cardResultado}>
      <Text style={styles.tituloResultado}>Dados Cadastrados</Text>

      <CampoResultado chave="Nome" valor={dados.nome} />
      <CampoResultado chave="Curso" valor={dados.curso} />
      <CampoResultado chave="Disciplina" valor={dados.disciplina} />
      <CampoResultado chave="Descrição" valor={dados.descricao} />
    </View>
  );
}

export default CardResultado;