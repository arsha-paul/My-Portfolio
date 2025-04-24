import React from "react";

const WhatsApp = ({ className }) => {
  const handleChatClick = () => {
    const phoneNumber = "918891133782";
    const message = "Hello! I would like to chat.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return <button className={className} onClick={handleChatClick} style={{ display: 'none' }} />;
};

export default WhatsApp;