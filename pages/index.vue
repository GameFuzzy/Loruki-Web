<template>
  <div id="Home">
    <!-- Showcase -->
    <section class="showcase">
      <div class="container grid">
        <div class="showcase-text">
          <h1>Easier Deployment</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            id ipsa, maxime minima non quidem reiciendis sapiente vel veritatis
            voluptatum? Cum, eum officia provident quis repellat unde. Cumque,
            incidunt odio?
          </p>
          <nuxt-link to="/features" class="btn btn-outline"
            >Read More</nuxt-link
          >
        </div>

        <div class="showcase-form card">
          <h2>Request a Demo</h2>
          <form action="">
            <div class="form-control">
              <label>
                <input type="text" name="name" placeholder="Name" required />
              </label>
            </div>
            <div class="form-control">
              <label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                />
              </label>
            </div>
            <div class="form-control">
              <label>
                <input type="email" name="email" placeholder="Email" required />
              </label>
            </div>
            <input type="submit" value="Send" class="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <div class="container">
        <h3 class="stats-heading text-center my-1">
          Welcome to the best platform for building applications of all types
          with modern architecture and scaling
        </h3>

        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else-if="lastUsageStats" class="grid grid-3 text-center my-4">
          <div>
            <fa icon="server" size="3x" />
            <h3>
              {{
                new Intl.NumberFormat('en-US').format(
                  lastUsageStats.deployments
                )
              }}
            </h3>
            <p class="text-secondary">Deployments</p>
          </div>
          <div>
            <fa icon="upload" size="3x" />
            <h3>
              {{
                new Intl.NumberFormat('en-US').format(lastUsageStats.published)
              }}
              TB
            </h3>
            <p class="text-secondary">Published</p>
          </div>
          <div>
            <fa icon="project-diagram" size="3x" />
            <h3>
              {{
                new Intl.NumberFormat('en-US').format(lastUsageStats.projects)
              }}
            </h3>
            <p class="text-secondary">Projects</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cli -->
    <section class="cli">
      <div class="container grid">
        <div class="card terminal">npm install -g loruki-cli</div>
        <div class="card">
          <h3>Easy to use, cross platform CLI</h3>
        </div>
        <div class="card">
          <h3>Deploy in seconds</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useResult } from '@vue/apollo-composable/dist'
import { useLastUsageStatsQuery } from '~/generated/graphql'

export default defineComponent({
  setup() {
    const { result, loading, error } = useLastUsageStatsQuery()
    const lastUsageStats = useResult(
      result,
      null,
      (data) => data.findFirstUsageStats
    )
    return { lastUsageStats, loading, error }
  }
})
</script>
