import Button from "@/components/button/Button";
import DropDown from "@/components/drop-down/DropDown";
import Input from "@/components/input/Input";
import Note from "@/components/note/Note";
import Text from "@/components/text/Text";

const Home = () => {
  const itemList = ['gym','walking','swim','play','football']
  return (
    <main className="w-screen min-h-screen px-4 bg-primary">
      <Button>sadsd</Button>
      {/* <Input error="sadsd" label="sdsds" /> */}
      {/* <Text label="text area" error="shagdjghas" /> */}
      <div className="w-[900px]  p-3">
        <Note />
      </div>
      <DropDown items={itemList}/>
    </main>
  );
};

export default Home;
