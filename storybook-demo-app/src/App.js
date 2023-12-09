import { Button } from "./stories/Button";

function App() {
  return (
    <>
      <Button label="hi" size="large" addClass={['fixed', 'w-full']} primary onClick={() => {alert('aa')}} />
    </>
  );
}

export default App;
