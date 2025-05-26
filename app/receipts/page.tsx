// import ReceiptList from "@components/ReceiptList";
import PDFDropzone from "@/components/PDFDropzone"
import ReceiptList from "@/components/ReceiptList"

function Receipts() {
  return (
    <div className="conteiner mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <PDFDropzone />
            <ReceiptList />
        </div>
    </div>
  )
}

export default Receipts