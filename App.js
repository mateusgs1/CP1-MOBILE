import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

import styles from './styles';
import CardResultado from './CardResultado';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(null);

  // Executado uma vez quando o app é carregado
  useEffect(() => {
    console.log('Aplicativo iniciado.');
  }, []);

  function handleEnviar() {
    setDadosEnviados({ nome, curso, disciplina, descricao });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <Text style={styles.titulo}>Formulário de Cadastro</Text>
        <Text style={styles.subtitulo}>Preencha os campos abaixo</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Curso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Ciência da Computação"
          value={curso}
          onChangeText={setCurso}
        />

        <Text style={styles.label}>Disciplina</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Desenvolvimento Mobile"
          value={disciplina}
          onChangeText={setDisciplina}
        />

        <Text style={styles.label}>Apresentação Pessoal</Text>
        <TextInput
          style={[styles.input, styles.inputDescricao]}
          placeholder="Escreva uma breve descrição sobre você..."
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={3}
        />

        <Button
          title="Enviar"
          color="#4f46e5"
          onPress={handleEnviar}
        />

        {dadosEnviados && (
          <View>
            <View style={styles.divisor} />
            <CardResultado dados={dadosEnviados} />
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}