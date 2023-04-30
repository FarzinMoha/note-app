import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Note from "@/components/note/Note";
import Text from "@/components/text/Text";

const Home = () => {
  return (
    <main className="w-screen min-h-screen px-4 bg-primary">
      <Button>sadsd</Button>
      {/* <Input error="sadsd" label="sdsds" /> */}
      {/* <Text label="text area" error="shagdjghas" /> */}
      <div className="w-[900px]  p-3">
        <Note />
        <Note />
      </div>
    </main>
  );
};

export default Home;
