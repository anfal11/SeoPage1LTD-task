/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { DatePicker } from "rsuite";


const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  function handleCopy(value) {
    navigator.clipboard.writeText(value);
  }
  return (
    <section className="py-10 px-6 bg-gray-200 overflow-x-scroll">
      <div>


   
      </div>

      <section className="flex w-[2700px]">
     {/* first col */}
     <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[1000px]">
     <div className="flex flex-col gap-5 px-3 ">
          {data?.map((course) => (
            <div className="w-[400px] ">
              <div key={course?._id} className="h-100 bg-white p-3">
                {/* row1 */}

                <section className="flex gap-20">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img1}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">client name</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img2}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">Sadik Istiyak</h5>
                  </div>
                </section>
                {/* row2 */}
                <section className="mt-3 flex gap-32 items-center">
                  <span className="flex items-center gap-2">
                    <FaTasks />
                    <p className="text-medium font-semibold">
                      {course.description}
                    </p>
                  </span>
                  <p
                    onClick={() => handleCopy(course.description)}
                    className="text-medium font-semibold"
                  >
                    <IoMdCopy className="cursor-pointer" />
                  </p>
                </section>

                {/* row3 */}

                <section className="mt-3 flex gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img3}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>
                  <div className="">
                    <img
                      src={course.img4}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>

                  <p className="bg-gray-200 rounded-full p-2">
                    {course.client_count}+
                  </p>
                  <p>
                    <FaRegComments />
                  </p>
                  <p>{course.comment_count}</p>
                  <p>
                    <MdAttachFile />
                  </p>
                  <p>25</p>
                  <DatePicker className="w-32" format="dd.MM.yyyy" />
                </section>
              </div>
            </div>
          ))}
        </div>
     </section>
 
      {/* 2nd col */}
      <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[1000px]">
     <div className="flex flex-col gap-5 px-3 ">
          {data?.map((course) => (
            <div className="w-[400px] ">
              <div key={course?._id} className="h-100 bg-white p-3">
                {/* row1 */}
                <section className="flex gap-20">
                
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img1}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">client name</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img2}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">Sadik Istiyak</h5>
                  </div>
                </section>
                {/* row2 */}
                <section className="mt-3 flex gap-32 items-center">
                  <span className="flex items-center gap-2">
                    <FaTasks />
                    <p className="text-medium font-semibold">
                      {course.description}
                    </p>
                  </span>
                  <p
                    onClick={() => handleCopy(course.description)}
                    className="text-medium font-semibold"
                  >
                    <IoMdCopy className="cursor-pointer" />
                  </p>
                </section>

                {/* row3 */}

                <section className="mt-3 flex gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img3}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>
                  <div className="">
                    <img
                      src={course.img4}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>

                  <p className="bg-gray-200 rounded-full p-2">
                    {course.client_count}+
                  </p>
                  <p>
                    <FaRegComments />
                  </p>
                  <p>{course.comment_count}</p>
                  <p>
                    <MdAttachFile />
                  </p>
                  <p>25</p>
                  <DatePicker className="w-32" format="dd.MM.yyyy" />
                </section>
              </div>
            </div>
          ))}
        </div>
     </section>

      {/* 3rd col */}
      <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[1000px]">
     <div className="flex flex-col gap-5 px-3 ">
          {data?.map((course) => (
            <div className="w-[400px] ">
              <div key={course?._id} className="h-100 bg-white p-3">
                {/* row1 */}
                <section className="flex gap-20">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img1}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">client name</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img2}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">Sadik Istiyak</h5>
                  </div>
                </section>
                {/* row2 */}
                <section className="mt-3 flex gap-32 items-center">
                  <span className="flex items-center gap-2">
                    <FaTasks />
                    <p className="text-medium font-semibold">
                      {course.description}
                    </p>
                  </span>
                  <p
                    onClick={() => handleCopy(course.description)}
                    className="text-medium font-semibold"
                  >
                    <IoMdCopy className="cursor-pointer" />
                  </p>
                </section>

                {/* row3 */}

                <section className="mt-3 flex gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img3}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>
                  <div className="">
                    <img
                      src={course.img4}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>

                  <p className="bg-gray-200 rounded-full p-2">
                    {course.client_count}+
                  </p>
                  <p>
                    <FaRegComments />
                  </p>
                  <p>{course.comment_count}</p>
                  <p>
                    <MdAttachFile />
                  </p>
                  <p>25</p>
                  <DatePicker className="w-32" format="dd.MM.yyyy" />
                </section>
              </div>
            </div>
          ))}
        </div>
     </section>

      {/* 4th col */}
      <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[1000px]">
     <div className="flex flex-col gap-5 px-3 ">
          {data?.map((course) => (
            <div className="w-[400px] ">
              <div key={course?._id} className="h-100 bg-white p-3">
                {/* row1 */}
                <section className="flex gap-20">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img1}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">client name</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img2}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">Sadik Istiyak</h5>
                  </div>
                </section>
                {/* row2 */}
                <section className="mt-3 flex gap-32 items-center">
                  <span className="flex items-center gap-2">
                    <FaTasks />
                    <p className="text-medium font-semibold">
                      {course.description}
                    </p>
                  </span>
                  <p
                    onClick={() => handleCopy(course.description)}
                    className="text-medium font-semibold"
                  >
                    <IoMdCopy className="cursor-pointer" />
                  </p>
                </section>

                {/* row3 */}

                <section className="mt-3 flex gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img3}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>
                  <div className="">
                    <img
                      src={course.img4}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>

                  <p className="bg-gray-200 rounded-full p-2">
                    {course.client_count}+
                  </p>
                  <p>
                    <FaRegComments />
                  </p>
                  <p>{course.comment_count}</p>
                  <p>
                    <MdAttachFile />
                  </p>
                  <p>25</p>
                  <DatePicker className="w-32" format="dd.MM.yyyy" />
                </section>
              </div>
            </div>
          ))}
        </div>
     </section>

       {/* 5th col */}
       <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[1000px]">
     <div className="flex flex-col gap-5 px-3 ">
          {data?.map((course) => (
            <div className="w-[400px] ">
              <div key={course?._id} className="h-100 bg-white p-3">
                {/* row1 */}
                <section className="flex gap-20">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img1}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">client name</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img2}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">Sadik Istiyak</h5>
                  </div>
                </section>
                {/* row2 */}
                <section className="mt-3 flex gap-32 items-center">
                  <span className="flex items-center gap-2">
                    <FaTasks />
                    <p className="text-medium font-semibold">
                      {course.description}
                    </p>
                  </span>
                  <p
                    onClick={() => handleCopy(course.description)}
                    className="text-medium font-semibold"
                  >
                    <IoMdCopy className="cursor-pointer" />
                  </p>
                </section>

                {/* row3 */}

                <section className="mt-3 flex gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img3}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>
                  <div className="">
                    <img
                      src={course.img4}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>

                  <p className="bg-gray-200 rounded-full p-2">
                    {course.client_count}+
                  </p>
                  <p>
                    <FaRegComments />
                  </p>
                  <p>{course.comment_count}</p>
                  <p>
                    <MdAttachFile />
                  </p>
                  <p>25</p>
                  <DatePicker className="w-32" format="dd.MM.yyyy" />
                </section>
              </div>
            </div>
          ))}
        </div>
     </section>

      {/* 6th col */}
      <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[1000px]">
     <div className="flex flex-col gap-5 px-3 ">
          {data?.map((course) => (
            <div className="w-[400px] ">
              <div key={course?._id} className="h-100 bg-white p-3">
                {/* row1 */}
                <section className="flex gap-20">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img1}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">client name</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img2}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />

                    <h5 className="text-medium font-semibold">Sadik Istiyak</h5>
                  </div>
                </section>
                {/* row2 */}
                <section className="mt-3 flex gap-32 items-center">
                  <span className="flex items-center gap-2">
                    <FaTasks />
                    <p className="text-medium font-semibold">
                      {course.description}
                    </p>
                  </span>
                  <p
                    onClick={() => handleCopy(course.description)}
                    className="text-medium font-semibold"
                  >
                    <IoMdCopy className="cursor-pointer" />
                  </p>
                </section>

                {/* row3 */}

                <section className="mt-3 flex gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.img3}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>
                  <div className="">
                    <img
                      src={course.img4}
                      className="h-10 w-10 rounded-full"
                      alt="..."
                    />
                  </div>

                  <p className="bg-gray-200 rounded-full p-2">
                    {course.client_count}+
                  </p>
                  <p>
                    <FaRegComments />
                  </p>
                  <p>{course.comment_count}</p>
                  <p>
                    <MdAttachFile />
                  </p>
                  <p>25</p>
                  <DatePicker className="w-32" format="dd.MM.yyyy" />
                </section>
              </div>
            </div>
          ))}
        </div>
     </section>
     
      </section>

    </section>
  );
};

export default Home;
