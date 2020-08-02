import { LoadingState } from '@/views/button-behavior/model/state'

export class LoadingStateList {
  static create (states: readonly LoadingState[]): LoadingStateList {
    return new LoadingStateList(states)
  }

  private constructor (private readonly states: readonly LoadingState[]) {
  }

  get head (): LoadingState {
    return this.states[0]
  }

  find (finder: (s: LoadingState) => boolean): LoadingState | null {
    return this.states.find(finder) || null
  }

  activate (target: LoadingState): LoadingStateList {
    return new LoadingStateList(
      this.states.map(
        s => target.equals(s) ? target.activate() : s.inactivate()
      )
    )
  }

  toArray (): readonly LoadingState[] {
    return this.states
  }
}
