/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { Button, DatePicker, Modal, Placeholder, Uploader } from "rsuite";
import axios from "axios";
import { toast } from "sonner";

const Home = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const [file, setFile] = useState();
  const [getFile, setGetFile] = useState([]);
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   fetch("./data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  useEffect(() => {
    fetch("http://localhost:5000/download")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  function handleCopy(value) {
    navigator.clipboard.writeText(value);
  }

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:5000/upload", formData)
      .then((res) => {
        toast.success("File Uploaded Successfully");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/upload")
      .then((res) => {
        console.log(res.data);
        setGetFile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="py-10 px-6 bg-gray-200 overflow-x-scroll">
      <div></div>

      <section className="flex w-[2700px]">
        {/* first col */}
        <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[850px]">
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

                      <h5 className="text-medium font-semibold">
                        Sadik Istiyak
                      </h5>
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
                    <Button size="sm" onClick={() => handleOpen("sm")}>
                      <MdAttachFile />
                    </Button>

                    <p>{getFile?.length}</p>
                    <DatePicker className="w-32" format="dd.MM.yyyy" />
                  </section>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* modal 1 */}
        <section>
          <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Placeholder.Paragraph rows={size === 'full' ? 100 : 10} /> */}
              {/* <Uploader>
      <Button>Select files...</Button>
    </Uploader> */}
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button
                onClick={upload}
                className="p-1 rounded-md bg-black text-white"
              >
                {" "}
                Upload{" "}
              </button>
            </Modal.Body>
          </Modal>
        </section>

        {/* 2nd col */}
        <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[850px]">
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

                      <h5 className="text-medium font-semibold">
                        Sadik Istiyak
                      </h5>
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
                    <Button size="sm" onClick={() => handleOpen("sm")}>
                      <MdAttachFile />
                    </Button>

                    <p>{getFile?.length}</p>
                    <DatePicker className="w-32" format="dd.MM.yyyy" />
                  </section>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* modal 2 */}
        <section>
          <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Placeholder.Paragraph rows={size === 'full' ? 100 : 10} /> */}
              {/* <Uploader>
      <Button>Select files...</Button>
    </Uploader> */}
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button
                onClick={upload}
                className="p-1 rounded-md bg-black text-white"
              >
                {" "}
                Upload{" "}
              </button>
            </Modal.Body>
          </Modal>
        </section>

        {/* 3rd col */}
        <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[850px]">
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

                      <h5 className="text-medium font-semibold">
                        Sadik Istiyak
                      </h5>
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
                    <Button size="sm" onClick={() => handleOpen("sm")}>
                      <MdAttachFile />
                    </Button>

                    <p>{getFile?.length}</p>
                    <DatePicker className="w-32" format="dd.MM.yyyy" />
                  </section>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* modal 3 */}
        <section>
          <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Placeholder.Paragraph rows={size === 'full' ? 100 : 10} /> */}
              {/* <Uploader>
      <Button>Select files...</Button>
    </Uploader> */}
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button
                onClick={upload}
                className="p-1 rounded-md bg-black text-white"
              >
                {" "}
                Upload{" "}
              </button>
            </Modal.Body>
          </Modal>
        </section>

        {/* 4th col */}
        <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[850px]">
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

                      <h5 className="text-medium font-semibold">
                        Sadik Istiyak
                      </h5>
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
                    <Button size="sm" onClick={() => handleOpen("sm")}>
                      <MdAttachFile />
                    </Button>

                    <p>{getFile?.length}</p>
                    <DatePicker className="w-32" format="dd.MM.yyyy" />
                  </section>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* modal 4 */}
        <section>
          <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Placeholder.Paragraph rows={size === 'full' ? 100 : 10} /> */}
              {/* <Uploader>
      <Button>Select files...</Button>
    </Uploader> */}
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button
                onClick={upload}
                className="p-1 rounded-md bg-black text-white"
              >
                {" "}
                Upload{" "}
              </button>
            </Modal.Body>
          </Modal>
        </section>

        {/* 5th col */}
        <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[850px]">
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

                      <h5 className="text-medium font-semibold">
                        Sadik Istiyak
                      </h5>
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
                    <Button size="sm" onClick={() => handleOpen("sm")}>
                      <MdAttachFile />
                    </Button>

                    <p>{getFile?.length}</p>
                    <DatePicker className="w-32" format="dd.MM.yyyy" />
                  </section>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* modal 5 */}
        <section>
          <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Placeholder.Paragraph rows={size === 'full' ? 100 : 10} /> */}
              {/* <Uploader>
      <Button>Select files...</Button>
    </Uploader> */}
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button
                onClick={upload}
                className="p-1 rounded-md bg-black text-white"
              >
                {" "}
                Upload{" "}
              </button>
            </Modal.Body>
          </Modal>
        </section>

        {/* 6th col */}
        <section className="scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-100 overflow-y-scroll h-[850px]">
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

                      <h5 className="text-medium font-semibold">
                        Sadik Istiyak
                      </h5>
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
                    <Button size="sm" onClick={() => handleOpen("sm")}>
                      <MdAttachFile />
                    </Button>

                    <p>{getFile?.length}</p>
                    <DatePicker className="w-32" format="dd.MM.yyyy" />
                  </section>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* modal 6 */}
        <section>
          <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Placeholder.Paragraph rows={size === 'full' ? 100 : 10} /> */}
              {/* <Uploader>
      <Button>Select files...</Button>
    </Uploader> */}
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button
                onClick={upload}
                className="p-1 rounded-md bg-black text-white"
              >
                {" "}
                Upload{" "}
              </button>
            </Modal.Body>
          </Modal>
        </section>
      </section>
    </section>
  );
};

export default Home;
