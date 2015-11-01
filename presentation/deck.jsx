import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  loop: require("./loop.png")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck>

        <Slide transition={["slide"]}>
          <Heading size={1}>Async JS</Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading>Summary</Heading>
          <List margin="30px auto auto 25%">
            <ListItem>Event-loop</ListItem>
            <ListItem>Sugar patterns</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={2}>Async JS ?</Heading>
          <Text>JS, Event-loop and Threads</Text>
        </Slide>

        <Slide transition={["slide"]}>
          <List>
            <ListItem>main event-loop</ListItem>
            <ListItem>stack / queue</ListItem>
            <ListItem>automatic (safe) threads (e.g. fs, net, etc.)</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.loop.replace("/", "")} height="470px"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Link href="http://latentflip.com/loupe/?code=CmZ1bmN0aW9uIHB1c2hJblRpbWUodGltZSl7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHJldHVybkluZm8oKXsKICAgICAgICBjb25zb2xlLmxvZygnSmVhbicpOwogICAgfSwgdGltZSk7Cn0KCmZ1bmN0aW9uIGdldEluZm8odG9rZW4pewogICAgcHVzaEluVGltZSg1MDAwKQp9OwoKCmdldEluZm8oJ2czamRzcXhkaTQnKQpnZXRJbmZvKCdxeGRpNGczamRzJykKZ2V0SW5mbygncXhkaTRnM2pkcycp!!!">
            <Text>Live sample (Loupe)</Text>
          </Link>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <BlockQuote margin="0">
            <Quote>Everything runs in parrallel, except your code</Quote>
            <Cite>Sic.</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={2}>Sugar patterns</Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <List>
            <ListItem>Callbacks</ListItem>
            <ListItem>Async Library (lib)</ListItem>
            <ListItem>Event Emitters, Dispatchers</ListItem>
            <ListItem>Promises (ES6, lib) *</ListItem>
            <ListItem>Generators (ES6) *</ListItem>
            <ListItem>Async functions (ES7) *</ListItem>
            <ListItem>Observables (ES7)</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3}>Promises</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <BlockQuote>
            <Quote textSize="3em">A promise represents the eventual result of an asynchronous operation</Quote>
            <Cite>Promises/A+ specification</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4}>States</Heading>
          <CodePane
              source={require("raw!./promisesstate.txt")}
              textSize="3em"
              margin="2em 0 0 0"/>

          <Link href="http://slyg.github.io/promises-limbo-presentation/#/4/3">
            <Text textSize="1em">See more</Text>
          </Link>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3}>Generators</Heading>
          <Text>`stuff*()`</Text>
        </Slide>

        <Slide transition={["slide"]}>
          <List>
            <ListItem>Iterators</ListItem>
            <ListItem>Can maintain their state</ListItem>
            <ListItem>Non blocking</ListItem>
            <ListItem>Use of `yield` expression</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <CodePane
              lang="javascript"
              source={require("raw!./generator.example")}
              margin="2em 0 0 0"/>
          <Text textSize="1em" textColor="primary">NB: framework can iterate till done is true</Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3}>Async Functions</Heading>
          <Text>`stuff*()`</Text>
        </Slide>

        <Slide transition={["slide"]}>
          <List>
            <ListItem>Async code written in a sync way</ListItem>
            <ListItem>Non blocking</ListItem>
            <ListItem>Use of `async` functions</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <CodePane
              lang="javascript"
              source={require("raw!./asyncfn.example")}
              margin="2em 0 0 0"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3}>Wrap up</Heading>
          <List>
            <ListItem>JS exec is sync</ListItem>
            <ListItem>JS for I/O only</ListItem>
            <ListItem>nodeJS provides system bindings + event loop</ListItem>
            <ListItem>Promises are OK</ListItem>
            <ListItem>Stateless middleware to scale</ListItem>
            <ListItem>W/ GraphQL / Falcor, async problem --> Trash</ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
