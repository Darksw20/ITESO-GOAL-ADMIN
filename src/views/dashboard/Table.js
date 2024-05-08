import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import CircularProgress from '@mui/material/CircularProgress' // Add this for loading indicator

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = ({ entity, columns, dataUrl }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  console.log('dataUrl:', dataUrl)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataUrl, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }) // Use Axios to make GET request
        console.log('response:', entity, response.data[entity])
        setData(response.data[entity])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [dataUrl])

  return (
    <Card>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ? data.map(
                    (row, index) => (
                      console.log('row:', row),
                      (
                        <TableRow hover key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                          {columns.map(column => (
                            <TableCell key={column}>{row[column.toLowerCase()]}</TableCell>
                          ))}
                        </TableRow>
                      )
                    )
                  )
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Card>
  )
}

export default DashboardTable
