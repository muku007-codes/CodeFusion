import React, { useContext } from 'react' 
import CodeEditor from './CodeEditor'
import { Box, styled} from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 50vh;
`

const Code = () => {

    const { html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <Container>
        <CodeEditor
            heading = "HTML"
            icon = "/"
            color = "red"
            value = {html}
            onChange = {setHtml}
        />
        <CodeEditor
            heading = "CSS"
            icon = "*"
            color = "#0EBEFF"
            value = {css}
            onChange = {setCss}
        />
        <CodeEditor
            heading = "JS"
            icon = "{}"
            color = "#FCD000"
            value = {js}
            onChange = {setJs}
        />
    </Container>
  )
}

export default Code;