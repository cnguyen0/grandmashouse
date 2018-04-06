import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
// import tileData from './tileData';

const tileData = [
  {
    img: 'https://hdwallsource.com/img/2014/6/food-wallpaper-5775-5940-hd-wallpapers.jpg',
    title: 'Pizza',
    author: 'Carl Smith',
  },
  {
    img: 'https://www.justonecookbook.com/wp-content/uploads/2017/02/Yakisoba-w722-NEW.jpg',
    title: 'Yakisoba',
    author: 'Anna Kim',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoW281i36cjjgWzythXrNzNdfllXhSYUnZcgUZnMFzsJidNdrGQQ',
    title: 'Cake',
    author: 'Rebecca Le',
  },
  {
    img: 'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-overlay-tease.jpg',
    title: 'Hot Dogs',
    author: 'Bob Marlon',
  },
  {
    img: 'https://pantograph0.goldbely.com/cfill-h630-w1200/uploads/merchant/main_image/559/hancock-gourmet-lobster-co.c62365d58493722415029905459b0cc6.jpg',
    title: 'Lobster Roll',
    author: 'Benjamin Clark',
  },
  {
    img: 'https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/blueberry-pancake-breakfast_thumbnaillarge_2017-04-06-17-19-17.jpg',
    title: 'Breakfast Platter',
    author: 'Tiffany Levi',
  },
  {
    img: 'https://www.rd.com/wp-content/uploads/2017/08/Attention-Sushi-Lovers-There-Are-Rules-About-Eating-Japanese-Food-That-You-Must-Follow_644962144-760x506.jpg',
    title: 'Sushi',
    author: 'Harold Eracnil',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnJ0bWXmoYZw0bB8-tV9X48EtaDXhaca4xP04UJmpM6YOfDNr',
    title: 'Tamale',
    author: 'Sarah Hernandez',
  }
];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cellWidth={300}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">Search Results</Subheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
