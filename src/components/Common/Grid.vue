<template>
  <div>
    <!-- v-row now provides gutter adjustments and has 3 options available -->
    <!-- v1.5 - <v-container grid-list-xl> to v2.0 - regular (nothing required) -->
    <!-- v1.5 - <v-container grid-list-md> to v2.0 - <v-row dense> -->
    <!-- v1.5 - <v-container> to v2.0 - <v-row no-gutters> -->

    <!-- v1.5 -->
    <v-container grid-list-xl>
      <v-layout>
        <v-flex>
          <v-sheet class="pa-3">v-flex</v-sheet>
        </v-flex>
        <v-flex>
          <v-sheet class="pa-3">v-flex</v-sheet>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- v2.0 -->
    <v-container>
      <v-row>
        <v-col>
          <v-sheet class="pa-3">v-col</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-3">v-col</v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <!-- v1.5 -->
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <v-sheet class="pa-3">v-flex</v-sheet>
        </v-flex>
        <v-flex>
          <v-sheet class="pa-3">v-flex</v-sheet>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- v2.0 -->
    <v-container>
      <v-row dense>
        <v-col>
          <v-sheet class="pa-3">v-col</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-3">v-col</v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <!-- v-row/v-col provides a default gutter while v-layout/v-flex does not -->

    <!-- v1.5 -->
    <v-container>
      <v-layout>
        <v-flex>
          <v-sheet class="pa-3">v-flex</v-sheet>
        </v-flex>
        <v-flex>
          <v-sheet class="pa-3">v-flex</v-sheet>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- v2.0 -->
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-sheet class="pa-3">v-col</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-3">v-col</v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-sheet height="100">
            <!-- v1.5 -->
            <v-container fill-height>
              <v-layout align-center justify-center>
                <v-flex shrink>
                  v-flex
                </v-flex>
              </v-layout>
            </v-container>
          </v-sheet>
        </v-col>

        <v-col cols="12" md="6">
          <v-sheet height="100">
            <!-- v2.0 -->
            <v-container fill-height>
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  v-col
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="8" md="6" lg="4" xl="2">
          <v-sheet class="pa-3">
            v-flex
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <!-- v1.5 -->
    <v-container>
      <v-layout>
        <v-flex xs12 sm8 md6 lg4 xl2>
          <v-sheet class="pa-3">
            v-col
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12 md6>
          <v-layout>
            <v-flex xs12 md6>
              <v-sheet class="pa-3">
                v-flex
              </v-sheet>
            </v-flex>

            <v-flex xs12 md6>
              <v-sheet class="pa-3">
                v-flex
              </v-sheet>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 md6>
          <v-sheet class="pa-3">
            v-flex
          </v-sheet>
        </v-flex>

        <v-flex xs12>
          <v-layout>
            <v-flex xs12 md4>
              <v-layout>
                <v-flex xs12 md6>
                  <v-sheet class="pa-3">
                    v-flex
                  </v-sheet>
                </v-flex>

                <v-flex xs12 md6>
                  <v-sheet class="pa-3">
                    v-flex
                  </v-sheet>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 md8>
              <v-layout>
                <v-flex xs12 md6>
                  <v-sheet class="pa-3">
                    v-flex
                  </v-sheet>
                </v-flex>

                <v-flex xs12 md6>
                  <v-sheet class="pa-3">
                    v-flex
                  </v-sheet>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- v2.0 -->
    <v-container>
      <v-row>
        <v-col xs12 md6>
          <v-row class="ma-n3">
            <v-col xs12 md6>
              <v-sheet class="pa-3">
                v-col
              </v-sheet>
            </v-col>

            <v-col xs12 md6>
              <v-sheet class="pa-3">
                v-col
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>

        <v-col xs12 md6>
          <v-sheet class="pa-3">
            v-col
          </v-sheet>
        </v-col>

        <v-col cols="12">
          <v-row class="ma-n3">
            <v-col cols="12" md="4">
              <v-row class="ma-n3">
                <v-col cols="12" md="6">
                  <v-sheet class="pa-3">
                    v-col
                  </v-sheet>
                </v-col>

                <v-col cols="12" md="6">
                  <v-sheet class="pa-3">
                    v-col
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" md="8">
              <v-row class="ma-n3">
                <v-col cols="12" md="6">
                  <v-sheet class="pa-3">
                    v-col
                  </v-sheet>
                </v-col>

                <v-col cols="12" md="6">
                  <v-sheet class="pa-3">
                    v-col
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
