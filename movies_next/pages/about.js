import React from 'react';
import styled from "@emotion/styled"

const about = () => {
    return (
        <DivStyled>
            this is an about page
        </DivStyled>
    );
};

const DivStyled=styled.div`

background:${props=>props.theme.colors.primary};

`

export default about;