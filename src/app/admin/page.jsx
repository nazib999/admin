import Card from "@/components/card/Card";
import Leftbar from "@/components/leftbar/Leftbar";
import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/topbar/Topbar";

const page = () => {
  return (
    <div>
      <div className="h-[110px]">
        <Topbar />
        <Navbar />
      </div>
      <div className="bg-gray-200 h-[calc(100vh-110px)] px-10 pt-10 flex gap-10">
        {/* left part */}

        <Leftbar />

        {/* right part */}

        <div className="w-full">
          <h1 className="text-black pt-1">Dashboard</h1>
          {/* cards */}
          <div className="flex items-center justify-between w-full gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex gap-5 items-center justify-between w-full">
            <div className="flex-[2]">left</div>
            <div className="flex-1">rigtt</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
