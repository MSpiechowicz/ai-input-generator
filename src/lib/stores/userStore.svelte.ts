import type { TopicType } from "$lib/types/topicType";

export const userStore = $state({
  searchQuery: '',
  input: '',
  output: '',
  topics: [] as TopicType[],
  selectedTopics: [] as TopicType[],
  filteredTopics: [] as TopicType[],
  defaultTopicCount: 6,
  topicCountIncrement: 6,
  promptCopied: false
});
