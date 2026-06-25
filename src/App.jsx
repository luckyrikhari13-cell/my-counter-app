import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Counter title="Counter A" initialValue={0} />
      <Counter title="Counter B" initialValue={10} />
      <Counter title="Counter C" initialValue={-5} />
    </div>
  );
}

export default App;