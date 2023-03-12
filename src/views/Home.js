import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardLink
} from "reactstrap"
import DataTableWithButtons from '../views/tables/data-tables/basic/TableWithButtons'
const Home = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Kick start your project 🚀</CardTitle>
                </CardHeader>
                <CardBody>

                    <CardText>
                      <DataTableWithButtons></DataTableWithButtons>
                    </CardText>
                </CardBody>
            </Card>

        </div>
    )
}

export default Home
