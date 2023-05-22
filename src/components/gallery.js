/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Pagination } from "@mui/material";
import CharacterCard from "./card";
import { generalActions } from "../redux/general";
import { CircularProgress } from "@mui/material";
import MaterialDialog from "./materialDialog";
import Header from "../layouts/header";

function Gallery() {
  const dispatch = useDispatch();

  const general = useSelector((state) => state.general);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState("1");
  const [selectedCard, setSelectedCard] = useState(null);

  const getTotalPagesQuery = `{characters(page:1){info{pages}}}`;
  const charactersDataQuery = `{characters(page:${currentPage}){results{id,name,status,episode{name},species,gender,origin{name},location{name},image,type,created}}}`;

  //get total pages
  useEffect(() => {
    dispatch(generalActions.getData(getTotalPagesQuery));
  }, []);

  //set total pages
  useEffect(() => {
    if (general.totalPages) {
      setTotalPages(general.totalPages);
    }
  }, [general.totalPages]);

  //get data
  useEffect(() => {
    if (totalPages) {
      dispatch(generalActions.getData(charactersDataQuery));
    }
  }, [charactersDataQuery, totalPages]);

  //set data
  useEffect(() => {
    if (general.graphData) {
      setData(general.graphData);
    }
  }, [general.graphData]);

  useEffect(() => {
    setLoading(general.loading);
  }, [general.loading]);

  const onChangePage = (e, pageNum) => {
    setCurrentPage(pageNum);
  };

  const onClickCard = (e, itemData) => {
    setSelectedCard(itemData);
  };

  const customFieldSelectedCard = (close) => {
    return (
      <Box sx={{ p: 2 }}>
        <div className="w-100 centerization">
          <CharacterCard data={selectedCard} />
        </div>

        <h3>Episodes:</h3>
        <ul>
          {selectedCard.episode?.[0]
            ? selectedCard.episode.map((item) => <li>{item.name}</li>)
            : ""}
        </ul>
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{
              position: "fixed",
              bottom: "40px",
              right: "20px",
              p: 2,
              backgroundColor: "white",
            }}
            size="small"
            color="inherit"
            onClick={close}
            variant="outlined"
          >
            close
          </Button>
        </Box>
      </Box>
    );
  };

  const onCloseCard = () => {
    setSelectedCard(null);
  };
  //-------------------- Return --------------------\\
  return (
    <div className="Gallery">
      <Header backBtn />

      {loading ? (
        <div className="loading-layer centerization">
          <CircularProgress color={"inherit"} size={"100px"} />{" "}
        </div>
      ) : (
        ""
      )}

      <Box
        component="div"
        sx={{
          pb: 3,
          pt: 10,
          borderRadius: "5px",
        }}
        className="w-100 centerization"
      >
        {data?.characters?.results?.[0] &&
          data.characters.results.map((item, index) => (
            <Grid xs={1} sm={3} md={4} key={Math.random()} sx={{ p: 1 }}>
              <div onClick={(e) => onClickCard(e, item)}>
                <CharacterCard data={item} />
              </div>
            </Grid>
          ))}

        {totalPages ? (
          <div className="pagination-box centerization">
            <Pagination
              onChange={onChangePage}
              count={totalPages}
              size="large"
              siblingCount={0}
              boundaryCount={1}
            />
          </div>
        ) : (
          ""
        )}
      </Box>

      {selectedCard ? (
        <MaterialDialog
          open
          customField={customFieldSelectedCard}
          onClose={onCloseCard}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Gallery;


