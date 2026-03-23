import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scroll: {
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 4,
    marginTop: 16,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: '#111827',
  },
  inputDescricao: {
    height: 90,
    textAlignVertical: 'top',
  },
  divisor: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 28,
  },
  cardResultado: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e7ff',
  },
  tituloResultado: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4f46e5',
    marginBottom: 16,
  },
  campoResultado: {
    marginBottom: 12,
  },
  chaveResultado: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  valorResultado: {
    fontSize: 15,
    color: '#111827',
    lineHeight: 22,
  },
});

export default styles;