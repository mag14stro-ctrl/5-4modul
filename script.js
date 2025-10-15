const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  type: "canvas",
  data: "https://example.com",
  dotsOptions: { color: "#000000", type: "square" },
  backgroundOptions: { color: "#ffffff" }
});

const qrCodeContainer = document.getElementById("qrCode");
qrCode.append(qrCodeContainer);

const textInput = document.getElementById("qrText");
const colorInput = document.getElementById("qrColor");
const bgColorInput = document.getElementById("bgColor");
const sizeInput = document.getElementById("qrSize");
const dotsStyle = document.getElementById("dotsStyle");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", () => {
  const text = textInput.value.trim() || "https://example.com";
  qrCode.update({
    data: text,
    width: parseInt(sizeInput.value),
    height: parseInt(sizeInput.value),
    dotsOptions: {
      color: colorInput.value,
      type: dotsStyle.value
    },
    backgroundOptions: {
      color: bgColorInput.value
    }
  });
});

downloadBtn.addEventListener("click", () => {
  qrCode.download({ name: "qr-code", extension: "png" });
});
