import FormSelector from "../FormSelector"
import "./style.css"

const Page = () => {
    return <div className="container">
        <FormSelector selectorLabel="state"
            optionsList={["Afrique", "Corse", "venezuela", "Canada",
                "France", "espagne", "Italie", "Allemagne",
                "belgique", "Grece", "Portugal", "Bulgarie",
                "Suisse", "danemark", "Pologne"]}
            selectHeight="select-height" />

    </div>
}

export default Page