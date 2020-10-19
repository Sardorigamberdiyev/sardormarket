import React from "react";
import { OganiServiceConsumer } from "../ogani-service-context";

const withGroserystoreService = (Wrapped, mapMethodsToProps) => {

    return (props) => {
        return (
            <OganiServiceConsumer>
                {
                    (grocerystoreService) => {
                        return <Wrapped {...props} grocerystoreService={grocerystoreService} />
                    }
                }
            </OganiServiceConsumer>
        )
    }
};

export default withGroserystoreService;