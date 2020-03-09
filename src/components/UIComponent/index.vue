<template>
  <div>
    <div id="app">
      <div>UI Component</div>
      <v-app id="inspire">
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-card class="mx-auto" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">OVERLINE</div>
                    <v-list-item-title class="headline mb-1"
                      >Card</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >A card has 4 basic components, <code>v-card-title</code>,
                      <code>v-card-subtitle</code>, <code>v-card-text</code> and
                      <code>v-card-actions</code>.
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn text
                    ><router-link :to="{ name: 'CardActions' }">
                      Card Actions
                    </router-link></v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="mx-auto" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">OVERLINE</div>
                    <v-list-item-title class="headline mb-1"
                      >Steppers</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly
                      fonwderfully</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn text
                    ><router-link :to="{ name: 'Steppers' }">
                      Steppers
                    </router-link></v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="mx-auto" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">OVERLINE</div>
                    <v-list-item-title class="headline mb-1"
                      >Headline 5</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly
                      fonwderfully</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn text>Button</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <router-view></router-view>
          </v-row>
        </v-container>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIComponent"
};
</script>

<style></style>
