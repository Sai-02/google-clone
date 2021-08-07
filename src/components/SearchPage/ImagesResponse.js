import React, { useContext, useState } from "react";
import { Data } from "../../App";
import { Skeleton } from "@material-ui/lab";
import { Modal, Button } from "antd";
import ResponseNotFound from "../Globals/ResponseNotFound";
const ImagesResponse = () => {
  const { imageResponse, isImageResponseFound } = useContext(Data);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalLink, setModalLink] = useState("#");
  const { items } = imageResponse;
  const openInNewTab = () => {
    window.open(modalImageSrc);
  };
  return (
    <>
      {isImageResponseFound ? (
        <>
          <Modal
            title={modalTitle}
            style={{ top: 20 }}
            visible={openModal}
            onOk={() => setOpenModal(false)}
            onCancel={() => setOpenModal(false)}
            centered
            footer={[
              <Button onClick={openInNewTab}>Open</Button>,
              <Button type="primary">
                <a href={modalLink} target="_blank" rel="noreferrer">
                  Visit
                </a>
              </Button>,
              ,
              <Button
                type="primary"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Back
              </Button>,
            ]}
          >
            <div
              className="modal-image-container"
              style={{
                display: "grid",
                placeItems: "center",
                width: "100%",
              }}
            >
              <img src={modalImageSrc} alt={modalTitle} />
            </div>
          </Modal>

          {items === undefined ? (
            <section className="all-response-container">
              <div className="space-filler"></div>
              <ResponseNotFound />
              <div className="space-filler"></div>
              <div className="space-filler"></div>
              <div className="space-filler"></div>
            </section>
          ) : (
            <section className="image-response">
              {items.map((item, index) => {
                return (
                  <article className="image-response-content" key={index}>
                    <div
                      className="image-response-img-container"
                      onClick={() => {
                        setModalLink(item.image.contextLink);
                        setModalImageSrc(item.link);
                        setModalTitle(item.title);
                        setOpenModal(true);
                      }}
                    >
                      <img src={item.link} alt="" />
                    </div>
                    <div className="image-response-text-container">
                      <p>{item.title}</p>
                      <p>{item.displayLink}</p>
                    </div>
                  </article>
                );
              })}
            </section>
          )}
        </>
      ) : (
        <section className="image-response">
          {[...Array(10)].map((item, index) => {
            return (
              <article className="image-response-content" key={index}>
                <div className="image-response-img-container">
                  <Skeleton
                    className="image-response-skeleton"
                    variant="rect"
                    height={200}
                    key={index}
                  />
                </div>
                <div
                  className="image-response-text-container"
                  style={{
                    textDecoration: "none",
                    cursor: "auto",
                  }}
                >
                  <Skeleton
                    style={{
                      width: "100%",
                    }}
                    variant="text"
                  />
                  <Skeleton
                    style={{
                      width: "100%",
                    }}
                    variant="text"
                  />
                </div>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default ImagesResponse;
